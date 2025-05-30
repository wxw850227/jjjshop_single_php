<?php

namespace app\common\exception;

use think\exception\Handle;
use think\Response;
use Throwable;
use think\facade\Env;
use think\facade\Log;

/**
 * 重写Handle的render方法，实现自定义异常消息
 */
class ExceptionHandler extends Handle
{
    protected $code;
    protected $message;

    /**
     * 输出异常信息
     */
    public function render($request, Throwable $e): Response
    {
        if ($e instanceof BaseException) {
            $this->code = $e->code;
            $this->message = $e->message;
        } else {
            $this->isJson = $request->isJson();
            if (Env::get('APP_DEBUG')) {
                return parent::render($request, $e);
            }
            $this->code = 0;
            $this->message = $e->getMessage() ?: '很抱歉，服务器内部错误';
            $this->recordErrorLog($e);
        }
        return json(['msg' => $this->message, 'code' => $this->code]);
    }

    /**
     * 将异常写入日志
     */
    private function recordErrorLog(Throwable $e)
    {
        Log::write($e->getMessage(), 'error');
        Log::write($e->getTraceAsString(), 'error');
    }
}

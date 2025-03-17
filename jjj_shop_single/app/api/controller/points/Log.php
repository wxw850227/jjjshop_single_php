<?php

namespace app\api\controller\points;

use app\api\controller\Controller;
use app\api\model\user\PointsLog as PointsLogModel;
use app\api\model\settings\Setting as SettingModel;

/**
 * 积分明细控制器
 */
class Log extends Controller
{
    /**
     * 积分明细列表
     */
    public function index()
    {
        $user = $this->getUser();
        $points = $user['points'];
        $list = (new PointsLogModel)->getList($user['user_id'], $this->postData());
        return $this->renderSuccess('', compact('list', 'points'));
    }

}
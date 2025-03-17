<?php

namespace app\common\model\file;

use app\common\model\BaseModel;

/**
 * 文件库分组模型
 */
class UploadGroup extends BaseModel
{
    protected $name = 'upload_group';
    protected $pk = 'group_id';

    /**
     * 分组详情
     */
    public static function detail($group_id) {
        return (new static())->find($group_id);
    }

}

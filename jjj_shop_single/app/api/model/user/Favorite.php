<?php

namespace app\api\model\user;

use app\common\model\user\Favorite as FavoriteModel;
/**
 * 收藏模型类
 */
class Favorite extends FavoriteModel
{

    /**
     * 取消收藏
     */
    public function cancelFav(){
        return $this->delete();
    }

    public function addFav($product_id, $user_id){
        return $this->save([
            'product_id' => $product_id,
            'user_id' => $user_id,
            'app_id' => self::$app_id
        ]);
    }
    public static function isFollow($pid,$user_id,$type){
        
        return (new static())->where('pid', '=', $pid)
                    ->where('user_id', '=', $user_id)
                    ->where('type', '=', $type)
                    ->count();
    }
}

<?php


namespace app\common\model\user;

use app\common\model\BaseModel;
use app\common\model\product\Product as ProductModel;
/**
 * 收藏模型
 */
class Favorite extends BaseModel
{
    protected $name = 'user_favorite';
    protected $pk = 'favorite_id';

    //获取收藏商品列表
    public function getList($user_id, $param){
        $list = $this->where('user_id', '=', $user_id)
                    ->with(['product' => ['image.file', 'sku']])
                    ->field("*")
                    ->order('create_time desc')
                    ->paginate($param);
        foreach ($list as &$item) {
            $show_sku = ProductModel::getShowSku($item['product']);
            // 商品主图
            $item['product_image'] = $item['product']['image'][0]['file_path'];
            $item['product_name'] = $item['product']['product_name'];
            $item['product_price'] = $item['product']['product_price'];
            $item['product_id'] = $item['product']['product_id'];
            $item['line_price'] = $show_sku['line_price'];
            unset($item['product']);
        }
        return $list;
    }

    /**
     * 关联商品表
     */
    public function product()
    {
        return $this->belongsTo('app\\common\\model\\product\\Product', 'product_id', 'product_id');
    }

    /**
     * 收藏详情
     */
    public static function detail($product_id, $user_id){
        return (new static())->where('product_id', '=', $product_id)
            ->where('user_id', '=', $user_id)
            ->find();
    }

    /**
     * 判断用户是否收藏
     */
    public static function isFav($product_id, $user_id){
        $detail = static::detail($product_id, $user_id);
        if($detail){
            return true;
        }
        return false;
    }
}
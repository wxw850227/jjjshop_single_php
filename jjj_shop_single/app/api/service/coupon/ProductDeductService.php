<?php

namespace app\api\service\coupon;

use app\common\library\helper;

/**
 * 优惠券抵扣金额
 */
class ProductDeductService
{
    private $actualReducedMoney;

    public function setProductCouponMoney($productList, $reducedMoney)
    {
        // 统计订单商品总金额,(单位分)
        $orderTotalPrice = 0;
        foreach ($productList as &$product) {
            $product['total_price'] *= 100;
            $orderTotalPrice += $product['total_price'];
        }
        // 计算实际抵扣金额
        $this->setActualReducedMoney($reducedMoney, $orderTotalPrice);
        // 实际抵扣金额为0，
        if ($this->actualReducedMoney > 0) {
            // 计算商品的价格权重
            $productList = $this->getProductListWeight($productList, $orderTotalPrice);
            // 计算商品优惠券抵扣金额
            $this->setProductListCouponMoney($productList);
            // 总抵扣金额
            $totalCouponMoney = helper::getArrayColumnSum($productList, 'coupon_money');
            $this->setProductListCouponMoneyFill($productList, $totalCouponMoney);
            $this->setProductListCouponMoneyDiff($productList, $totalCouponMoney);
        }
        return $productList;
    }

    public function getActualReducedMoney()
    {
        return $this->actualReducedMoney;
    }

    private function setActualReducedMoney($reducedMoney, $orderTotalPrice)
    {
        $reducedMoney *= 100;
        $this->actualReducedMoney = ($reducedMoney >= $orderTotalPrice) ? $orderTotalPrice - 1 : $reducedMoney;
    }

    private function arraySortByWeight($productList)
    {
        return array_sort($productList, 'weight', true);
    }

    private function getProductListWeight($productList, $orderTotalPrice)
    {
        foreach ($productList as &$product) {
            $product['weight'] = $product['total_price'] / $orderTotalPrice;
        }
        return $this->arraySortByWeight($productList);
    }

    private function setProductListCouponMoney(&$productList)
    {
        foreach ($productList as &$product) {
            $product['coupon_money'] = bcmul($this->actualReducedMoney, $product['weight']);
        }
        return true;
    }

    private function setProductListCouponMoneyFill(&$productList, $totalCouponMoney)
    {
        if ($totalCouponMoney === 0) {
            $temReducedMoney = $this->actualReducedMoney;
            foreach ($productList as &$product) {
                if ($temReducedMoney === 0) break;
                $product['coupon_money'] = 1;
                $temReducedMoney--;
            }
        }
        return true;
    }

    private function setProductListCouponMoneyDiff(&$productList, $totalCouponMoney)
    {
        $tempDiff = $this->actualReducedMoney - $totalCouponMoney;
        foreach ($productList as &$product) {
            if ($tempDiff < 1) break;
            $product['coupon_money']++ && $tempDiff--;
        }
        return true;
    }

}
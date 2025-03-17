<?php

namespace app\shop\controller\page;

use app\shop\controller\Controller;
use app\shop\model\page\Page as PageModel;
use app\shop\model\page\PageCategory as PageCategoryModel;

/**
 * App页面管理
 */
class Page extends Controller
{
    /**
     * 页面列表
     */
    public function list()
    {
        $model = new PageModel;
        $list = $model->getList($this->postData(), 10);
        //查找默认
        $default = $model::getDefault();
        return $this->renderSuccess('', compact('list', 'default'));
    }

    /**
     * 页面列表
     */
    public function index()
    {
        $model = new PageModel;
        $list = $model->getList($this->postData(), 20);
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 新增页面
     */
    public function add()
    {
        $model = new PageModel;
        if ($this->request->isGet()) {
            return $this->renderSuccess('', [
                'defaultData' => $model->getDefaultItems(),
                'jsonData' => ['page' => $model->getDefaultPage(), 'items' => []],
                'opts' => [
                    'catgory' => [],
                ]
            ]);
        }
        // 接收post数据
        $post = $this->postData();
        if (!$model->add(json_decode($post['params'], true))) {
            return $this->renderError($model->getError() ?: '添加失败');
        }
        return $this->renderSuccess('添加成功');
    }

    /**
     * 首页编辑
     * @return \think\response\Json
     */
    public function home()
    {
        return $this->edit();
    }

    /**
     * 编辑页面
     */
    public function edit($page_id = null)
    {
        $model = $page_id > 0 ? PageModel::detail($page_id) : PageModel::getHomePage();
        if ($this->request->isGet()) {
            $jsonData = $model['page_data'];
            jsonRecursive($jsonData);
            return $this->renderSuccess('', [
                'defaultData' => $model->getDefaultItems(),
                'jsonData' => $jsonData,
                'opts' => [
                    'catgory' => [],
                ]
            ]);
        }

        // 接收post数据
        $post = $this->postData();
        if (!$model->edit(json_decode($post['params'], true))) {
            return $this->renderError($model->getError() ?: '更新失败');
        }
        return $this->renderSuccess('更新成功');
    }

    /**
     * 删除页面
     */
    public function delete($page_id)
    {
        // 帮助详情
        $model = PageModel::detail($page_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

    /**
     * 分类模板
     */
    public function category()
    {
        $model = PageCategoryModel::detail();
        if ($this->request->isGet()) {
            return $this->renderSuccess('', compact('model'));
        }
        if ($model->edit($this->postData())) {
            return $this->renderSuccess('更新成功');
        }
        return $this->renderError($model->getError() ?: '更新失败');
    }

    /**
     * 新增页面
     */
    public function addPage()
    {
        $model = new PageModel;
        if ($this->request->isGet()) {
            return $this->renderSuccess('', [
                'defaultData' => $model->getDefaultItems(),
                'jsonData' => ['page' => $model->getDefaultPage(), 'items' => []],
                'opts' => [
                    'catgory' => [],
                ]
            ]);
        }
        // 接收post数据
        $post = $this->postData();
        if (!$model->add(json_decode($post['params'], true), 10)) {
            return $this->renderError($model->getError() ?: '添加失败');
        }
        return $this->renderSuccess('添加成功');
    }

    /**
     * 编辑页面
     */
    public function editPage($page_id)
    {
        $model = PageModel::detail($page_id);
        if ($this->request->isGet()) {
            $jsonData = $model['page_data'];
            jsonRecursive($jsonData);
            return $this->renderSuccess('', [
                'defaultData' => $model->getDefaultItems(),
                'jsonData' => $jsonData,
                'opts' => [
                    'catgory' => [],
                ]
            ]);
        }
        // 接收post数据
        $post = $this->postData();
        if (!$model->edit(json_decode($post['params'], true))) {
            return $this->renderError($model->getError() ?: '更新失败');
        }
        return $this->renderSuccess('更新成功');
    }

    /**
     * 删除页面
     */
    public function deletePage($page_id)
    {
        // 详情
        $model = PageModel::detail($page_id);
        if (!$model->setDelete()) {
            return $this->renderError($model->getError() ?: '删除失败');
        }
        return $this->renderSuccess('删除成功');
    }

    /**
     * 设置默认
     */
    public function setPage($page_id)
    {
        // 页面详情
        $model = PageModel::detail($page_id);
        if (!$model->setDefault()) {
            return $this->renderError($model->getError() ?: '设置失败');
        }
        return $this->renderSuccess('设置成功');
    }

}

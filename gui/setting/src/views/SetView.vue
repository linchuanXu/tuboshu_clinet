<script setup>
const message = useMessage();
const settings = ref({})

const isEdgeAdsorption = ref(false)
const isMemoryOptimizationEnabled = ref(false)
const systemTheme = ref("system")
const leftMenuPosition = ref('left')
const isMenuVisible = ref(true)
const isOpenDevTools = ref(false)
const isOpenZoom = ref(true)
const isOpenContextMenu = ref(true)
const defaultWindowSize = ref({width: 800, height: 600})

const version = ref({
  version: '加载中...',
  electron: '--',
  chrome: '--'
})

const themes = [
  {
    label: '跟随系统',
    value: 'system'
  },
  {
    label: '普通模式',
    value: 'light'
  },
  {
    label: '深度模式',
    value: 'dark'
  }
]

const leftMenu = [
    {
      label: '左侧',
      value: 'left'
    },
    {
      label: '右侧',
      value: 'right'
    }
]


const getValue= (name, obj) => {
  let item = obj.value.find((item) => item.name === name);
  if(typeof item.value === 'number') return item.value !== 0;
  if(typeof item.value === 'string' && item.value === "0") return false;
  return item.value;
}

onMounted(async () => {
  version.value = await window.myApi.getVersion();
  settings.value = await window.myApi.getSettings();

  isEdgeAdsorption.value = getValue('isWindowEdgeAdsorption', settings);
  isMemoryOptimizationEnabled.value = getValue('isMemoryOptimizationEnabled', settings);
  leftMenuPosition.value = getValue('leftMenuPosition', settings);
  systemTheme.value = getValue('systemTheme', settings);
  isMenuVisible.value = getValue('isMenuVisible', settings);
  isOpenDevTools.value = getValue('isOpenDevTools', settings);
  isOpenZoom.value = getValue('isOpenZoom', settings);
  isOpenContextMenu.value = getValue('isOpenContextMenu', settings);
  defaultWindowSize.value = getValue('defaultWindowSize', settings);
})



const changeSwitch = async (val) => {
  const setting = { name : 'isWindowEdgeAdsorption', value: val ? 1 : 0}
  window.myApi.updateSetting(setting);
  message.success(`设置已更新,请重新启动`)
}

const changeOptimize = async (val) => {
  const setting = { name : 'isMemoryOptimizationEnabled', value: val ? 1 : 0}
  window.myApi.updateSetting(setting);
  message.success(`设置已更新,请重新启动`)
}

const changeMenuVisible = (val) => {
  window.myApi.updateSetting({ name : 'isMenuVisible', value: val ? 1 : 0});
  message.success(`设置已更新,请重新启动`)
}

const changeDevTools = (val) => {
  window.myApi.updateSetting({ name : 'isOpenDevTools', value: val ? 1 : 0});
  message.success(`设置已更新,请重新启动`)
}

const changeZoom= (val) => {
  window.myApi.updateSetting({ name : 'isOpenZoom', value: val ? 1 : 0});
  message.success(`设置已更新,请重新启动`)
}

const changeContextMenu= (val) => {
  window.myApi.updateSetting({ name : 'isOpenContextMenu', value: val ? 1 : 0});
  message.success(`设置已更新,请重新启动`)
}

const changeTheme = (e) => {
  window.myApi.updateSetting({ name : 'systemTheme', value: e.target.value});
  message.success(`设置已更新,请重新启动`)
}

const changeMenuPos = (e) => {
  window.myApi.updateSetting({ name : 'leftMenuPosition', value:e.target.value});
  message.success(`设置已更新,请重新启动`)
}

const handleWinChange = (e) => {
  const { value, placeholder } = e.target;
  const key = placeholder === 'width' ? 'width' : 'height';
  const numValue = Number(value);
  let setting = {};

  if (isNaN(numValue) || numValue <= 0) {
    message.error('请输入有效的正数');
    return;
  }

  if(key === 'width'){
    if(numValue > 3000){
      message.error('宽度不能超过3000px');
      return;
    }
    if(numValue < 300){
      message.error('宽度不能小于300px');
      return;
    }
    setting = {width: numValue, height: Number(defaultWindowSize.value.height)}
  }

  if(key === 'height'){
    if(numValue > 2000){
      message.error('高度不能超过2000px');
      return;
    }
    if (numValue < 300){
      message.error('高度不能小于300px');
      return;
    }
    setting = {width: Number(defaultWindowSize.value.width), height: numValue};
  }
  window.myApi.updateSetting({ name : 'defaultWindowSize', value: setting});
  message.success(`设置已更新,请重新启动`)
}
</script>

<template>
  <div id="content-main">
    <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
      <n-h3 style="margin-bottom: 0;">通用设置</n-h3>
    </n-alert>

    <n-alert :show-icon="false">
      1.设置改变后，重启程序才能生效。<br>
    </n-alert>

    <n-card embedded :bordered="true" style="margin-top:1rem;">
      <div class="wrap">

        <div class="card">
          <div class="vleft">启动窗口：</div>
          <div class="vright">
            <n-input-group @change="handleWinChange">
              <n-input size="small"
                       v-model:value="defaultWindowSize.width"
                       :style="{ width: '20%' }"
                       placeholder="width"  /> x
              <n-input size="small"
                       v-model:value="defaultWindowSize.height"
                       :style="{ width: '20%' }"
                       placeholder="height" />
            </n-input-group>
          </div>
        </div>

        <div class="card">
          <div class="vleft">调试模式：</div>
          <div class="vright">
            <n-switch size="medium"
                      v-model:value="isOpenDevTools"
                      @update:value="changeDevTools" style="font-size:12px;" >
              <template #checked>开启</template>
              <template #unchecked>关闭</template>
            </n-switch>
          </div>
        </div>

        <div class="card">
          <div class="vleft">边缘吸附：</div>
          <div class="vright">
            <n-switch size="medium"
              v-model:value="isEdgeAdsorption"
              @update:value="changeSwitch"
              style="font-size:12px;" >
              <template #checked>开启</template>
              <template #unchecked>关闭</template>
            </n-switch>
          </div>
        </div>

        <div class="card">
          <div class="vleft">内存优化：</div>
          <div class="vright">
            <n-switch size="medium"
              v-model:value="isMemoryOptimizationEnabled"
              @update:value="changeOptimize" style="font-size:12px;" >
              <template #checked>开启</template>
              <template #unchecked>关闭</template>
            </n-switch>
          </div>
        </div>

        <div class="card">
          <div class="vleft">页面缩放：</div>
          <div class="vright">
            <n-switch size="medium"
                      v-model:value="isOpenZoom"
                      @update:value="changeZoom" style="font-size:12px;" >
              <template #checked>开启</template>
              <template #unchecked>关闭</template>
            </n-switch>
          </div>
        </div>

        <div class="card">
          <div class="vleft">右键菜单：</div>
          <div class="vright">
            <n-switch size="medium"
                      v-model:value="isOpenContextMenu"
                      @update:value="changeContextMenu" style="font-size:12px;" >
              <template #checked>显示</template>
              <template #unchecked>关闭</template>
            </n-switch>
          </div>
        </div>

        <div class="card">
          <div class="vleft">显示边栏：</div>
          <div class="vright">
            <n-switch size="medium"
                      v-model:value="isMenuVisible"
                      @update:value="changeMenuVisible" style="font-size:12px;" >
              <template #checked>显示</template>
              <template #unchecked>隐藏</template>
            </n-switch>
          </div>
        </div>

        <div class="card">
          <div class="vleft">边栏位置：</div>
          <div class="vright">
            <n-radio-group size="small"
                 @change="changeMenuPos"
                 v-model:value="leftMenuPosition" name="menuPoss" style="font-size: 12px;">
              <n-radio-button
                  v-for="item in leftMenu"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
              />
            </n-radio-group>
          </div>
        </div>

        <div class="card">
          <div class="vleft">系统主题：</div>
          <div class="vright">
            <n-radio-group size="small"
             @change="changeTheme"
             v-model:value="systemTheme" name="themegroup1" style="font-size: 12px;">
              <n-radio-button
                  v-for="item in themes"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
              />
            </n-radio-group>
          </div>
        </div>

      </div>
    </n-card>

    <n-card embedded :bordered="true" style="margin-top: 20px;">
      <span style="padding-right: 20px;">
        当前版本: <n-tag :bordered="false" type="info" size="medium">{{version.version}}</n-tag>
      </span>
      <span style="padding-right: 20px;">
          最新版本: <n-tag :bordered="false" type="info" size="medium">{{version.newVersion}}</n-tag>
        </span>
      <span>
          获取新版：
        <n-tag :bordered="false" type="info" size="medium" style="margin-right: 20px;">
          <a target="_blank" :href="version.github">GitHub下载</a>
        </n-tag>
        <n-tag :bordered="false" type="error" size="medium"><a target="_blank" :href="version.download">国内下载</a></n-tag>
        </span>
    </n-card>
  </div>
</template>

<style scoped>
.card{
  display: flex;
  margin-bottom: 10px;
  min-width: 0;
  gap: 20px;
}

</style>
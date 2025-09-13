<script setup>

</script>

<template>
  <div id="content-main">
      <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
        <n-h3 style="margin-bottom: 0;">使用反馈</n-h3>
      </n-alert>

    <n-card title="🌐 联系方式" embedded :bordered="true">
      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">Email:</n-tag>lyf200@qq.com<br>
      </n-space>
      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">微信号:</n-tag>upsort<br>
      </n-space>
      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">Telegram:</n-tag>
        <a target="_blank" href="https://t.me/shaziaicom">https://t.me/shaziaicom</a><br>
      </n-space>
      <n-p style="color: #666;">微信加群请先添+wx，需备注：Tuboshu </n-p>
      <n-p style="color: #666;">欢迎定制功能咨询 </n-p>
    </n-card>
  </div>
</template>

<style scoped>
.n-card{
  margin-top: 1rem;
}
</style>
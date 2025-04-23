<script setup>

</script>

<template>
  <div id="content-main">
      <n-alert :show-icon="false" type="info" style="margin-bottom: 1rem;">
        <n-h3 style="margin-bottom: 0;">关于MindNotes</n-h3>
      </n-alert>

    <n-card title="📝 项目说明" embedded :bordered="true">
      <n-p style="color: #666;">
        MindNotes是基于Tuboshu二次开发的知识管理工具，专注于提升个人知识管理效率。
      </n-p>
      <n-p style="color: #666; margin-top: 10px;">
        如果您有任何建议或问题，可以通过以下方式Tuboshu开发团队：
      </n-p>
      
      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">Email:</n-tag>lyf200@qq.com<br>
      </n-space>
      <n-space size="small" style="margin-top: 10px">
        <n-tag :bordered="false" type="info" size="small">微信号:</n-tag>upsort<br>
      </n-space>
    </n-card>
  </div>
</template>

<style scoped>
.n-card{
  margin-top: 1rem;
}
</style>
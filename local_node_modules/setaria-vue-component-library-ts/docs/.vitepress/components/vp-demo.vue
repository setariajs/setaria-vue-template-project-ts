<script setup lang="ts">
import { computed, getCurrentInstance, toRef } from 'vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
// import { CaretTop } from '@element-plus/icons-vue'
// import { useLang } from '../composables/lang'
// import { useSourceCode } from '../composables/source-code'
// import { usePlayGround } from '../composables/use-playground'


import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, setSourceVisible] = useToggle()

const formatPathDemos = computed(() => {
  const demos = {}


  Object.keys(props.demos || {}).forEach((key) => {
    demos[key.replace('./', '').replace('.vue', '')] =
      props.demos[key].default
  })

  return demos
})

console.log(props.path, formatPathDemos.value)

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)


const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    $message.error('复制失败')
  }
  try {
    await copy()
    $message.success('复制成功')
  } catch (e: any) {
    $message.error(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />
      <el-collapse-transition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </el-collapse-transition>
      <div class="op-btns">
        <ElButton type="primary" @click="setSourceVisible()">
          {{ sourceVisible ? '隐藏' : '显示' }}代码
        </ElButton>
        <ElButton type="success" @click="copyCode">
          复制代码
        </ElButton>
      </div>
      <transition name="el-fade-in-linear">
        <div v-show="sourceVisible" class="example-float-control" @click="setSourceVisible(false)">
          <span>隐藏代码</span>
        </div>
      </transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    line-height: 3rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>

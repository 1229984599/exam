<script setup lang="ts">
import { useRouter } from "vue-router";

defineOptions({
  name: "MConfig",
});
const dialog = ref(false);
const router = useRouter();
const categoryStore = useCategoryStore();
const { width } = useWindowSize();

function handleClose() {
  dialog.value = false;
}

function handleClick() {
  dialog.value = true;
}

function resetConfig() {
  categoryStore.resetConfig();
  dialog.value = false;
  router.push({ name: "Home" }).then(() => {
    ElMessage.success("配置已重置");
  });
}
</script>

<template>
  <UnoCSSIconButton
    icon="i-tabler:settings"
    @click="handleClick"
  ></UnoCSSIconButton>
  <el-drawer
    ref="drawerRef"
    v-model="dialog"
    title="配置"
    :append-to-body="true"
    :before-close="handleClose"
    direction="rtl"
    :size="width <= 800 ? '60%' : '30%'"
  >
    <template #default>
      <div>
        <el-form :model="categoryStore.config">
          <el-form-item label="年级">
            <el-select
              v-model="categoryStore.config.grade"
              placeholder="请选择年级"
            >
              <el-option label="二年级" value="two" />
            </el-select>
          </el-form-item>
          <el-form-item label="学科">
            <el-select
              v-model="categoryStore.config.subject"
              placeholder="请选择学科"
            >
              <el-option label="语文" value="yuwen" />
              <el-option label="数学" value="math" />
            </el-select>
          </el-form-item>
          <el-form-item label="题目">
            <el-select
              v-model="categoryStore.config.title"
              placeholder="请选择题目"
            >
              <el-option
                v-for="question in categoryStore.questionList"
                :label="question.title"
                :value="question.title"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="字体大小">
            <el-slider
              :min="20"
              :max="300"
              v-model="categoryStore.config.textSize"
              :step="5"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="resetConfig">清除缓存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <template #footer></template>
  </el-drawer>
</template>

<style scoped></style>

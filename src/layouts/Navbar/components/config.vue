<script setup lang="ts">
defineOptions({
  name: "MConfig",
});
const dialog = ref(false);

const categoryStore = useCategoryStore();
const { width } = useWindowSize();

function handleClose() {
  dialog.value = false;
}

function handleClick() {
  dialog.value = true;
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
    class="demo-drawer"
  >
    <template #default>
      <div>
        <el-form :model="categoryStore.config">
          <el-form-item label="年级">
            <el-select
              v-model="categoryStore.config.grade"
              placeholder="Please select activity area"
            >
              <el-option label="一年级" value="one" />
              <el-option label="二年级" value="two" />
            </el-select>
          </el-form-item>
          <el-form-item label="学科">
            <el-select
              v-model="categoryStore.config.subject"
              placeholder="Please select activity area"
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
            <el-input-number
              v-model="categoryStore.config.textSize"
              :step="5"
            />
          </el-form-item>
        </el-form>
      </div>
    </template>
    <template #footer></template>
  </el-drawer>
</template>

<style scoped></style>

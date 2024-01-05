<script setup lang="ts">
import { FormInstance } from "element-plus";
import { useRouter } from "vue-router";

const categoryStore = useCategoryStore();
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const rules = reactive({
  grade: [{ required: true, message: "请选择年级", trigger: "blur" }],
  subject: [{ required: true, message: "请选择学科", trigger: "blur" }],
  title: [{ required: true, message: "请选择题目", trigger: "blur" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success("提交成功");
      router.push({ name: "Question" });
    } else {
      ElMessage.error("提交失败,请检查配置");
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div text-center pt-20 flex justify-center flex-items-center>
    <div>
      <el-form ref="ruleFormRef" :rules="rules" :model="categoryStore.config">
        <el-form-item label="年级" prop="grade">
          <el-select
            v-model="categoryStore.config.grade"
            placeholder="请选择年级"
          >
            <el-option label="一年级" value="one" />
            <el-option label="二年级" value="two" />
          </el-select>
        </el-form-item>
        <el-form-item label="学科" prop="subject">
          <el-select
            v-model="categoryStore.config.subject"
            placeholder="请选择学科"
          >
            <el-option label="语文" value="yuwen" />
            <el-option label="数学" value="math" />
          </el-select>
        </el-form-item>
        <el-form-item label="题目" prop="title">
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
        <el-form-item label="字体大小" prop="textSize">
          <el-input-number v-model="categoryStore.config.textSize" :step="5" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            确定
          </el-button>
          <el-button type="danger" @click="resetForm(ruleFormRef)"
            >重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped></style>

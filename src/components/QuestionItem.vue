<script setup lang="ts">
import { PropType } from "vue";

defineOptions({
  name: "MQuestionItem",
});

type propsType = "text" | "image";
const props = defineProps({
  questionList: {
    required: true,
    type: Array,
    default: [],
  },
  questionType: {
    type: String as PropType<propsType>,
    default: "text",
  },
  title: {
    required: true,
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  textSize: {
    type: Number,
    default: 160,
  },
});
// 将questionList强制转换为数组类型。
const questionTransform = computed(() =>
  Array.isArray(props.questionList) && props.questionList?.length > 0
    ? props.questionList
    : [props.questionList],
);
</script>

<template>
  <!--  标题-->
  <div>
    <h1
      class="divider font-700 cursor-pointer"
      text="center 2xl #095aa9"
      p="t-6 b-1"
      md="text-[60px] pb-4"
    >
      {{ title }}
    </h1>
    <h3 p="l2 " m="b-5 t-5" md="mt-10 text-lg" font-700>
      {{ subTitle }}
    </h3>
  </div>
  <!--  问题列表-->
  <div
    p="2"
    md="grid-cols-2 gap-5"
    lg="grid-cols-3 gap-10"
    class="grid justify-center items-center text-center font-600 question-item"
  >
    <div v-for="question in questionTransform">
      <div v-if="questionType === 'text'">
        {{ question }}
      </div>
      <div v-else-if="questionType === 'image'">
        <el-image
          fit="scale-down"
          :src="question"
          :preview-src-list="[question]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-item {
  font-size: v-bind(textSize + "px");
}
</style>

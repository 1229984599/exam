<script setup lang="ts">
import { PropType } from "vue";

defineOptions({
  name: "MQuestionItem",
});

type propsType = "text" | "image";
defineProps({
  questionList: {
    required: true,
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
  otherDesc: {
    type: String,
    default: "",
  },
});
// 将questionList强制转换为数组类型。
// const questionTransform = computed(() =>
//   Array.isArray(props.questionList) && props.questionList?.length > 0
//     ? props.questionList
//     : [props.questionList],
// );
</script>

<template>
  <!--  标题-->
  <div>
    <h1
      class="divider font-700 cursor-pointer"
      text="center 4xl #095aa9"
      p="t-6 b-1"
      md="text-6xl pb-4"
    >
      {{ title }}
    </h1>
    <p
      p="x2"
      text="2xl"
      indent="2xl"
      m="b-3 t-8"
      md="text-center mt-10 text-5xl"
      font-700
    >
      {{ subTitle }}
    </p>
  </div>
  <!--  如果问题是数组，则显示问题列表。-->
  <!--  问题列表-->
  <div
    v-if="Array.isArray(questionList)"
    p="2"
    md="grid-cols-2 gap-5"
    lg="grid-cols-3 gap-10"
    class="grid justify-center items-center text-center font-600 question-item"
  >
    <div v-for="question in questionList">
      <div v-if="questionType === 'text'">
        <span v-html="question"></span>
      </div>
      <div v-else-if="questionType === 'image'">
        <el-image
          :hide-on-click-modal="true"
          fit="fill"
          :src="question"
          :preview-src-list="[question]"
        />
      </div>
    </div>
  </div>
  <div md="text-center" justify-center v-else>
    <div class="question-item px-2" indent="2xl" v-if="questionType === 'text'">
      <span indent="2xl" v-html="questionList"></span>
    </div>
    <el-image
      v-else-if="questionType === 'image'"
      :hide-on-click-modal="true"
      fit="fill"
      :src="questionList"
      :preview-src-list="[questionList]"
    />
    <div class="question-item px-2" indent="2xl">
      <span v-html="otherDesc"></span>
    </div>
  </div>
</template>

<style scoped>
.question-item {
  font-size: v-bind(textSize + "px");
}
</style>

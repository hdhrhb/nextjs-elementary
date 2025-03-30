"use server";

interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  //DBにタスク
  console.log("タスク作成完了");
  console.log(formData);
  console.log(taskId);
  state.error = "エラーが発生しました";
  return state;
};

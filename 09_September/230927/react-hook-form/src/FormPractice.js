import { useForm } from "react-hook-form";

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "이름은 필수 항목입니다",
          })}
          placeholder="name"
        />
        {errors.name?.message}
        <br />
        <input
          {...register("age", {
            validate: {
              age: (value) => {
                return value >= 0 || "0 이상의 숫자만 입력 가능합니다";
              },
            },
          })}
          placeholder="age"
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

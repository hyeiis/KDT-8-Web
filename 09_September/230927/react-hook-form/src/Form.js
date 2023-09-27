import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch, // 상태 체크 → 내가 입력한 값이 정상적인지 확인할 수 있다
    formState: { errors },
  } = useForm();

  // handleSubmit 인자: 두 개의 함수를 받는데 하나는 유효할 때 실행되는 함수 (필수), 유효하지 않을 때 실행되는 함수 (선택)

  const onValid = (data) => {
    console.log(data);
  };

  const onInvalid = (error) => {
    console.log("error", error);
  };

  // console.log(watch("password")); // password에 대한 상태만 체크

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "최소 2글자 이상 작성하세요", value: 2 },
          })}
          placeholder="username"
        />
        {errors.username?.message}
        <br />
        <input
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") || "gmail로만 가입 가능합니다"
                );
              },
            },
          })}
          placeholder="email"
        />
        {errors.email?.message}
        <br />
        <input {...register("password")} placeholder="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

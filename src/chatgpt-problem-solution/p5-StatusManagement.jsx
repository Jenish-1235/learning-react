export default function StatusManagement({ status }) {
  const render = () => {
    if (status === "loading") {
      return "Please wait ...";
    } else if (status === "success") {
      return "Operation Successfull";
    } else if (status === "error") {
      return "Something went wrong.";
    }
  };
  return (
    <>
      <h1>{render()}</h1>
    </>
  );
}

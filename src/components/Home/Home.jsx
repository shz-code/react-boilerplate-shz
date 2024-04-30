import Button from "../ui/Button";
import Input from "../ui/Input";

export const Home = () => {
  return (
    <div>
      Vite app initialized with react-redux, redux-toolkit, tailwindcss, react
      router dom
      <Button title="Custom Button" />
      <Button title="Custom Button" disabled={true} />
      <Button title="Custom Button" disabled={true} loading={true} />
      <Input placeholder="Custom Input" />
    </div>
  );
};

import { SignUpForm } from './_components/SignUpForm';

function Home() {
  return (
    <div className="mt-[-60px] flex w-[30rem] flex-col rounded-xl bg-white/80 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">Welcome to Fresco</h1>
        <p>Create an account to get started.</p>
      </div>
      <SignUpForm />
    </div>
  );
}

export default Home;

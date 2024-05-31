import SignInForm from '@/components/form/SignInForm';
import { Toaster } from '@/components/ui/toaster';


const page = () => {
  return (

    <div className='w-full h-full flex justify-center items-center'>
      <div>
      <SignInForm />
      <Toaster />
      </div>
    </div>
  );
};

export default page;
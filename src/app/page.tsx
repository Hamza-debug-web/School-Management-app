import 'boxicons/css/boxicons.min.css';
import Link from 'next/link';
export default function LogIn() {
  return (
    <>
      <div
        className='h-screen flex mx-auto justify-center items-center'
        style={{
          backgroundImage: "url('/images/bacground.png')",
           backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <form action="" className='w-auto h-auto p-8 space-y-4 text-white backdrop-blur-3xl'>
          <h1 className='text-3xl text-center text-green-900'>LogIn Form</h1>

          <div className="relative">
            <input
              type="text"
              className="w-full relative outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl"
              placeholder="Username"
              required
            />
            <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2"></i>
          </div>

          <div className="relative">
            <input
              type="password"
              className="w-full relative outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl"
              placeholder="Password"
              required
            />
            <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2"></i>
          </div>

          <div className='flex justify-between'>
            <label className='flex gap-2'>  <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-green-950 checked:border-transparent focus:outline-none transition duration-300 ease-in-out"/>
            Remember Me</label>
            <a href="#" className='hover:text-black'>Forgot password</a>
          </div>

          <button
            className='w-full text-2xl bg-white text-black font-semibold rounded-lg p-2 hover:text-white hover:bg-[rgba(255,255,255,0.1)]'
            type="submit"
          >
            LogIn
          </button>

          <div>
            <p>Don&apos;t have an Account? <Link className='hover:text-black' href='/Register'> Go First Registered</Link></p>
          </div>

        </form>
      </div>
    </>
  );
}

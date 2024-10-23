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
          <h1 className='text-3xl text-center text-green-900'> <Link href='/' className='text-xl'><i className='bx bx-arrow-back' ></i></Link> Registeration Form</h1>

          <div className="relative">
            <input
              type="text"
              className="w-full relative outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl placeholder-white"
              placeholder="Username"
              required
            />
            <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2"></i>
          </div>

          <div className="relative">
            <input
              type="password"
              className="w-full relative outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl placeholder-white"
              placeholder="Password"
              required
            />
            <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2"></i>
          </div>

          <div className="relative">
            <input
              type="email"
              className="w-full  relative outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl placeholder-white"
              placeholder="Enter your Email"
              required
            />
            <i className="bx bxs-envelope absolute right-5 top-1/2 transform -translate-y-1/2"></i>
          </div>

          

          <button
            className='w-full text-2xl bg-white text-black font-semibold rounded-lg p-2 hover:text-white hover:bg-[rgba(255,255,255,0.1)]'
            type="submit"
          >
            Singeup
          </button>

        </form>
      </div>
    </>
  );
}

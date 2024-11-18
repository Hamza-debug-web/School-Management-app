 "use client";

 import 'boxicons/css/boxicons.min.css';
 import Link from 'next/link';
 import Image from 'next/image';
 import { useState, useEffect } from 'react';
 import { useRouter } from 'next/navigation'; // For redirection
 import Cookie from 'js-cookie';
 
 // TypeScript Interfaces
 interface FormData {
   email: string;
   password: string;
   rememberMe: boolean;
 }
 
 export default function LogIn() {
   const [formData, setFormData] = useState<FormData>({
     email: '',
     password: '',
     rememberMe: false,
   });
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);
 
   const router = useRouter(); // Next.js router for navigation
 
   // Redirect to /admin if already logged in
   useEffect(() => {
     const token = Cookie.get('authToken');
     if (token) {
       router.replace('/admin'); // Redirect to admin without adding to browser history
     }
   }, [router]);
 
   // Handle input changes
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value, type, checked } = event.target;
     setFormData({
       ...formData,
       [name]: type === 'checkbox' ? checked : value,
     });
   };
 
   // Handle form submission
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
 
     // Client-side validation
     if (!formData.email || !formData.password) {
       setError('Email and password are required.');
       return;
     }
 
     setError(null); // Clear previous errors
     setLoading(true); // Show loading state
 
     try {
       const response = await fetch(`http://localhost:3000/api/login`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
 
       if (!response.ok) {
         const errorData = await response.json();
         setError(errorData.message || 'Login failed. Please try again.');
       } else {
         const data = await response.json();
         console.log('Login successful:', data);
 
         // Store the token in cookies
         Cookie.set('authToken', data.token, { expires: 7, path: '/' }); // 7 days expiration
 
         // Redirect to the admin page
         router.replace('/admin'); // Use replace instead of push
       }
     } catch (err) {
       setError('An error occurred. Please try again.');
       console.error(err);
     } finally {
       setLoading(false);
     }
   };
   
  return (
    <div
      className="h-screen flex mx-auto justify-center items-center"
      style={{
        backgroundImage: "url('/images/back.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center">
        <div>
          <Image src="/images/admin.webp" alt="Admin" width={400} height={400} className="hidden md:block" />
        </div>

        <div>
          <form onSubmit={handleSubmit} className="w-auto h-auto p-8 space-y-4 text-white backdrop-blur-3xl">
            <h1 className="text-3xl text-center text-green-900">Admin Form</h1>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl"
                placeholder="Email"
                required
              />
              <i className="bx bxs-envelope absolute right-5 top-1/2 transform -translate-y-1/2"></i>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none p-2 pr-10 border-2 border-solid border-[rgba(225,225,225,0.2)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2"></i>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-green-950 checked:border-transparent focus:outline-none transition duration-300 ease-in-out"
                />
                Remember Me
              </label>
              <Link href="#" className="hover:text-black">
                Forgot password
              </Link>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              className="w-full text-2xl bg-white text-black font-semibold rounded-lg p-2 hover:text-white hover:bg-[rgba(255,255,255,0.1)]"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            {/* Register Link */}
            <div>
              <p>
                Don&apos;t have an Account?{' '}
                <Link className="hover:text-black" href="/Register">
                  Go First Registered
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

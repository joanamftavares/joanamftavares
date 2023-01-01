import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p style={{ color:'#AAF0C1' }}  className="text-3xl text-white font-semibold text-center">find me at</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a href="mailto:joanamftavares@gmail.com">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">joanamftavares@gmail.com</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/joanamftavares/">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-linkedin fa-2x" />
                        <p className="font-semibold text-xl">Joana Tavares</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

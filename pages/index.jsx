import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Joana Tavares
                </p>
                  <Tippy content={`Online`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-online px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-online mr-2`} />Online
                    </span>
                  </Tippy>
            
                </div>
                <br></br>
                <p className="text-white/50 text-md mt-7">
I have always considered myself a problem solver. For every problem that might appear, I will always find a solution to deal with it. During my academic journey, I became fascinated with transforming simple data into a world of knowledge and I am eager to feel the same way while facing new challenges in the next stage of my career.
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="jt" src={`https://cdn.discordapp.com/attachments/919966397524738091/1058037349323378760/1612736474209.jpg`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                  <Tippy content="Online" animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-online`} />
                  </Tippy>
                </div>
              </div>
              
            </div>
            <br></br>
            <span style={{ zIndex: '-1', color:'#AAF0C1', opacity:'0.6' }} className="text-white/5 absolute bottom-3 left-7 text-l sm:text-xl md:text-xl lg:text-xl font-semibold">aspiring Data Analyst</span>
          </div>
          <div>
              <img alt="logos" src={`https://cdn.discordapp.com/attachments/919966397524738091/1059127861711228928/Design_sem_nome.jpg`}/>
          </div>
      </div>
    </>
  )
}

/*

        <div className="py-20">
        <p className="text-3xl text-white font-semibold">GitHub Repositories</p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center mt-2">
          {_repositories
            ? repositories
              ? repositories
                  .sort((a, b) => b.stargazers_count - a.stargazers_count)
                  .map((_, __) => (
                    <a
                      key={__}
                      href={`https://github.com/joanamftavares/`+_.name}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                    >
                      <p className="text-md text-white">
                        <span className="text-sm text-white/50 bg-black/25 px-2 py-1 rounded-md mr-1">
                          {_.owner.login}
                        </span>
                        {_.name}
                      </p>
                      <div className="mt-5 flex justify-end w-full h-full items-center">
                        <div className="flex w-full justify-between items-center">
                          <Tippy
                            content={"Stars"}
                            arrow={false}
                            animation="shift-away"
                          >
                            <div className="flex items-center">
                              <p className="text-sm">
                                <i className="fal fa-star mr-2" />
                              </p>
                              <p>{_.stargazers_count}</p>
                            </div>
                          </Tippy>
                          <div className="text-sm text-white bg-black/25 px-2 py-1 rounded-md mr-1">
                            {_.language || "Empty"}
                          </div>
                          <Tippy
                            content={"Forks"}
                            arrow={false}
                            animation="shift-away"
                          >
                            <div className="flex items-center justify-end">
                              <p>{_.forks}</p>
                              <p className="text-sm">
                                <i className="fal fa-code-branch ml-2" />
                              </p>
                            </div>
                          </Tippy>
                        </div>
                      </div>
                    </a>
                  ))
              : Array.from({ length: 6 }).map((_, __) => (
                  <div
                    key={__}
                    className="bg-[#191932]/20 p-4 rounded-lg w-full"
                  >
                    <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                    <div className="mt-5 flex w-full justify-between items-center">
                      <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                      <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                      <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    </div>
                  </div>
                ))
            : Array.from({ length: 6 }).map((_, __) => (
                <div key={__} className="bg-[#191932]/20 p-4 rounded-lg w-full">
                  <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                  <div className="mt-5 flex w-full justify-between items-center">
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                </div>
              ))}
        </div>
      </div>
*/


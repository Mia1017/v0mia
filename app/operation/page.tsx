"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrendingUp, Users, Zap, CheckCircle2, ExternalLink } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"
import Image from "next/image"
import Link from "next/link"

export default function OperationPage() {
  // 定义Ayaka酱的笔记数据
  const ayakaNotes = [
    { name: "meirenyu.jpg", link: "http://xhslink.com/o/7TIILUPPVPk", label: "笔记" },
    { name: "pijiu.jpg", link: "http://xhslink.com/o/8ipjoEMayVb", label: "笔记" },
    { name: "haixian.jpg", link: "http://xhslink.com/o/71pgMqLgKTl", label: "笔记" }, // label从爆款改为了笔记
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            账号运营
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            爆款内容 · 网感热点 · 视觉叙事
          </p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 01 小红书｜北海道Ayaka酱 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              
              {/* 左侧：文案内容 */}
              <div className="flex-1 lg:max-w-md">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                      01 小红书｜北海道Ayaka酱
                    </h2>
                    <p className="text-sm text-primary font-medium tracking-wide">HBC北海道放送实习</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                    <span>运营官方小红书账号，发布 20+ 篇北海道观光笔记。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                    <span>执行 10+ 家店铺／景点取材，完成沟通、拍摄与内容制作。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                    <span>参与企划、剪辑与视觉设计，协助建立账号风格，实现涨粉 800+。</span>
                  </li>
                </ul>
              </div>

              {/* 右侧：图片展示组 */}
              <div className="w-full lg:flex-1">
                <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-end">
                  
                  {/* 个人主页截图 - 已删除“个人主页”文字提示 */}
                  <Link 
                    href="https://xhslink.com/m/3SDaawO9bWr" 
                    target="_blank" 
                    className="w-[200px] sm:w-[220px] h-[380px] relative rounded-2xl border-2 border-primary/10 shadow-lg hover:border-primary/40 transition-all group/profile bg-white overflow-hidden"
                  >
                    <Image 
                      src="/v0-designer-brand-tk/zhuye.jpg" 
                      alt="Ayaka酱个人主页"
                      fill
                      className="object-contain p-1"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/profile:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                      <ExternalLink className="text-white opacity-0 group-hover/profile:opacity-100 transition-opacity w-8 h-8" />
                    </div>
                  </Link>

                  {/* 堆叠的笔记截图 - 已删除“爆款”文字提示 */}
                  <div className="w-[240px] h-[400px] relative mt-8 sm:mt-0">
                    {ayakaNotes.map((note, index) => (
                      <Link 
                        key={note.name} 
                        href={note.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute block group/note transition-all duration-300 hover:scale-105 hover:!z-[100]"
                        style={{
                          top: `${index * 30}px`,
                          left: `${index * 30}px`,
                          zIndex: index + 10,
                        }}
                      >
                        <div className="w-[180px] h-[320px] relative rounded-xl border-2 border-white shadow-2xl cursor-pointer bg-white overflow-hidden">
                          <Image 
                            src={`/v0-designer-brand-tk/${note.name}`} 
                            alt={note.label}
                            fill
                            className="object-contain p-0.5"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/note:opacity-100 transition-opacity flex items-center justify-center z-10 rounded-xl">
                            <ExternalLink className="w-8 h-8 text-white/80" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* 02 小红书｜个人账号 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                  02 小红书｜个人账号
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide">娱乐追星内容创作</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span>聚焦娱乐追星内容，擅长捕捉热点，创作具有网感的笔记。</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span>产出千赞笔记 15+ 篇，累计获赞 58,000+。</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span>在选题、标题与平台表达节奏上形成敏锐判断力。</span></li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImagePlaceholder icon={Zap} text="千赞笔记案例 1" aspectRatio="aspect-[4/5]" />
              <ImagePlaceholder icon={Zap} text="千赞笔记案例 2" aspectRatio="aspect-[4/5]" />
            </div>
          </div>

          {/* 03 成都理工大学公众号 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                  03 微信｜成都理工大学公众号
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide">年度毕业季专题策划</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span>主导学校官方毕业季内容策划，统筹场景设计、事件梳理与文案表达。</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span>完成 31 个场景设计、24 个事件回顾，并打磨 60+ 轮细节。</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" /><span>最终阅读量达 1.6 万+，成为历届毕业季中热度最高的作品。</span></li>
            </ul>

            <ImagePlaceholder icon={Users} text="毕业季专题长图呈现" aspectRatio="aspect-[16/9]" />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

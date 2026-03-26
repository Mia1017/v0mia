"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export default function OperationPage() {
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
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* 01 小红书｜北海道Ayaka酱 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-1">
                  01 小红书｜北海道Ayaka酱
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide">HBC北海道放送实习</p>
              </div>
            </div>
            
            {/* 提行效果实现：使用 ul 列表 */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>运营官方小红书账号，发布 20+ 篇北海道观光笔记。</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>执行 10+ 家店铺／景点取材，完成沟通、拍摄与内容制作。</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>参与企划、剪辑与视觉设计，协助建立账号风格，实现涨粉 800+。</span>
              </li>
            </ul>

            <ImagePlaceholder
              icon={TrendingUp}
              text="HBC实习作品集锦"
              aspectRatio="aspect-video"
            />
          </div>

          {/* 02 小红书｜个人账号 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-1">
                  02 小红书｜个人账号
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide">娱乐追星内容创作</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>聚焦娱乐追星内容，擅长捕捉热点，创作具有网感的笔记。</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>产出千赞笔记 15+ 篇，累计获赞 58,000+。</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>在选题、标题与平台表达节奏上形成敏锐判断力。</span>
              </li>
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
                <h2 className="font-serif text-2xl font-light text-foreground mb-1">
                  03 成都理工大学公众号
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide">年度毕业季专题策划</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>主导学校官方毕业季内容策划，统筹场景设计、事件梳理与文案表达。</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>完成 31 个场景设计、24 个事件回顾，并打磨 60+ 轮细节。</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-4 text-primary/40 mt-1 shrink-0" />
                <span>最终阅读量达 1.6 万+，成为历届毕业季中热度最高的作品。</span>
              </li>
            </ul>

            <ImagePlaceholder
              icon={Users}
              text="毕业季专题长图呈现"
              aspectRatio="aspect-[16/9]"
            />
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-foreground mb-8">运营核心能力</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["内容策划", "爆款拆解", "热点追踪", "视觉审美", "数据洞察", "小红书运营", "全案统筹"].map(skill => (
              <span key={skill} className="px-5 py-2 bg-background text-foreground rounded-full text-sm border border-border shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

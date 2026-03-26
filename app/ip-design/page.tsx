"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
// 确保导入了所有使用的图标，修复 ReferenceError
import { Award, Star, Smile, Palette, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IPDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6 hero-text-shadow">
            IP设计
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Logo设计 · 角色设计 · 表情包创作
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 01 成都理工大学体育学院 - 文字在上，图片垂直全屏排列 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden">
            {/* 文字描述部分 - 居中 */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    成都理工大学体育学院
                  </h2>
                  <p className="text-sm text-primary font-medium tracking-wide italic">品牌形象与吉祥物设计</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                为成都理工大学体育学院设计品牌Logo及配套角色形象。
                设计将体育精神与学院特色相融合，打造具有辨识度的视觉识别系统。
              </p>
            </div>

            {/* 图片展示区 - 垂直单列布局 */}
            <div className="space-y-12 flex flex-col items-center">
              
              {/* 1. Logo - 圆形、居中、带跳转链接 */}
              <div className="w-full flex flex-col items-center gap-6">
                <Link 
                  href="https://mp.weixin.qq.com/s/kjHRJwrk5teJv_ApwJPC_w" 
                  target="_blank"
                  className="relative group/logo"
                >
                  <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-primary/20 bg-white shadow-lg p-3 ring-4 ring-primary/5 transition-transform group-hover/logo:scale-105">
                    <img 
                      src="/v0-designer-brand-tk/logo0.png" 
                      alt="体育学院Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/logo:opacity-100 rounded-full transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white/80" />
                  </div>
                </Link>
                <h3 className="text-sm text-primary font-medium tracking-wider italic">LOGO设计</h3>
              </div>

              {/* 2. 展示图 zhanshi.jpg - 全宽展示 */}
              <div className="w-full">
                <div className="w-full relative rounded-xl border border-border shadow-md overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/zhanshi.jpg" 
                    alt="Logo视觉展示" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* 3. IP角色 xt.jpg - 全宽展示 */}
              <div className="w-full flex flex-col items-center gap-6 pt-6 border-t border-border/60">
                <div className="w-full relative rounded-xl border border-border shadow-md overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/xt.jpg" 
                    alt="吉祥物IP角色设计" 
                    className="w-full h-auto block"
                  />
                </div>
                <h3 className="text-sm text-primary font-medium tracking-wider italic">IP角色设计</h3>
              </div>
            </div>
          </div>

          {/* 02 时尚芭莎获奖作品 */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                      时尚芭莎获奖作品
                    </h2>
                    <p className="text-sm text-accent font-medium tracking-wide italic">莎莎IP设计 · 荣誉奖项</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  作品「莎莎」荣获大赛奖项，展现了时尚与艺术结合的视觉张力。
                </p>
              </div>
              <div className="w-full md:w-2/5 shrink-0">
                <div className="aspect-video relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  <Image src="/v0-designer-brand-tk/bazaar.jpg" alt="莎莎" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* 03 成都理工大学官方IP栗子 */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Smile className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                  成都理工大学官方IP
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide italic">栗子表情包 · 系列插图</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-square relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  <Image src={`/v0-designer-brand-tk/lizi${num}.png`} alt={`栗子${num}`} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 hero-text-shadow">设计技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Logo设计", "角色设计", "Procreate", "插画创作"].map(skill => (
              <span key={skill} className="px-5 py-2.5 bg-background text-foreground rounded-full text-sm border border-border shadow-sm font-medium">
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

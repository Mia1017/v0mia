"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Star, Smile, Palette } from "lucide-react"
// 引入 Next.js 的 Image 组件
import Image from "next/image"

export default function IPDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6 hero-text-shadow">
            IP设计
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Logo设计 · 角色设计 · 表情包创作
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 01 成都理工大学体育学院 - 文字在上图片在下（田字格） */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group hover:shadow-md transition-shadow duration-300">
            {/* 文字描述部分 - 居中排列 */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {/* 更换为 Palette 图标，更符合设计主题 */}
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    成都理工大学体育学院
                  </h2>
                  <p className="text-sm text-primary font-medium tracking-wide">品牌形象与吉祥物设计</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                为成都理工大学体育学院设计品牌Logo及配套角色形象。
                设计将体育精神与学院特色相融合，打造具有辨识度的视觉识别系统，
                作品成功应用于学院文创及宣传物料。
              </p>
            </div>

            {/* 图片展示部分 - 田字格排列 */}
            <div className="space-y-6">
              {/* 第一排：Logo + 展示稿 */}
              <div className="grid grid-cols-2 gap-6">
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  <Image 
                    src="/v0-designer-brand-tk/logo.png" 
                    alt="体育学院Logo设计" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  <Image 
                    src="/v0-designer-brand-tk/zhanshi.jpg" 
                    alt="Logo视觉展示" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 第二排：吉祥物小体1 + 小体2 */}
              <div className="grid grid-cols-2 gap-6">
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  <Image 
                    src="/v0-designer-brand-tk/xiaoti1.png" 
                    alt="吉祥物小体角色设计1" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  <Image 
                    src="/v0-designer-brand-tk/xiaoti2.png" 
                    alt="吉祥物小体角色设计2" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 02 时尚芭莎获奖作品 - 替换为真实图片 */}
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
                    <p className="text-sm text-accent font-medium tracking-wide">莎莎IP设计 · 荣誉奖项</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  参与时尚芭莎IP设计大赛，作品「莎莎」荣获奖项。
                  设计融合时尚元素与可爱风格，展现品牌年轻化的活力形象，
                  获得业界肯定。
                </p>
              </div>
              
              <div className="w-full md:w-2/5 shrink-0">
                <div className="aspect-video relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  {/* 这里替换为你时尚芭莎的作品图片，例如 bazaar.jpg */}
                  <Image 
                    src="/v0-designer-brand-tk/bazaar.jpg" 
                    alt="时尚芭莎获奖作品莎莎" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 03 成都理工大学官方IP栗子 - 替换为真实图片 */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Smile className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                  成都理工大学官方IP
                </h2>
                <p className="text-sm text-primary font-medium tracking-wide">栗子表情包 · 系列插图</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              参与设计成都理工大学官方吉祥物「栗子」的表情包和系列插图，
              为校园文化传播增添趣味性和亲和力。表情包已在微信表情上架。
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="aspect-square relative rounded-xl overflow-hidden border border-border bg-white shadow-sm p-1">
                  {/* 这里替换为你栗子的表情包图片，例如 lizi1.png, lizi2.png... */}
                  <Image 
                    src={`/v0-designer-brand-tk/lizi${num}.png`} 
                    alt={`栗子表情包${num}`} 
                    fill 
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 hero-text-shadow">设计技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Logo设计", "角色设计", "表情包设计", "品牌视觉", "插画创作",
              "Adobe Illustrator", "Procreate", "Photoshop"
            ].map(skill => (
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

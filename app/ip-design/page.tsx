"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
// 确保导入了所有使用的图标
import { Award, Star, Smile, Palette, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function IPDesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light mb-6 hero-text-shadow">
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
          
          {/* 01 成都理工大学体育学院 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            {/* 文字描述部分 - 居中 */}
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    成都理工大学体育学院
                  </h2>
                  <p className="text-sm text-primary font-medium tracking-wide italic decoration-primary/30">品牌形象与吉祥物设计</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                为成都理工大学体育学院设计品牌Logo及配套角色形象。
                设计将体育精神与学院特色相融合，打造具有辨识度的视觉识别系统。
              </p>
            </div>

            {/* 图片展示区 - 垂直单列布局 */}
            <div className="space-y-12 flex flex-col items-center">
              
              {/* 1. Logo - 圆形、居中、塞满并精准偏移 */}
              <div className="w-full flex flex-col items-center gap-6">
                <Link 
                  href="https://mp.weixin.qq.com/s/kjHRJwrk5teJv_ApwJPC_w" 
                  target="_blank"
                  className="relative group/logo drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.03]"
                >
                  <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-2 border-primary/20 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-4 ring-primary/5">
                    <img 
                      src="/v0-designer-brand-tk/logo0.png" 
                      alt="体育学院圆形Logo" 
                      {/* 关键修改：添加 translate-x-[2mm] 实现图片在容器内右移 2mm */}
                      className="w-full h-full object-cover object-center translate-x-[2mm]" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/logo:opacity-100 rounded-full transition-opacity flex items-center justify-center z-20">
                    <ExternalLink className="w-8 h-8 text-white/90" />
                  </div>
                </Link>
                <h3 className="text-sm text-primary font-medium tracking-wider italic uppercase">
                  Logo设计
                </h3>
              </div>

              {/* 2. 展示图 zhanshi.jpg */}
              <div className="w-full">
                <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/zhanshi.jpg" 
                    alt="Logo视觉展示" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* 3. IP角色 xt.jpg */}
              <div className="w-full flex flex-col items-center gap-6 pt-6 border-t border-border/60">
                <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/xt.jpg" 
                    alt="吉祥物IP角色设计" 
                    className="w-full h-auto block"
                  />
                </div>
                <h3 className="text-sm text-primary font-medium tracking-wider italic uppercase">
                  IP角色设计
                </h3>
              </div>
            </div>
            
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-primary/20 blur-[60px] -z-10"></div>
          </div>

          {/* 其他板块逻辑同上... */}

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10 hero-text-shadow">设计技能</h2>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {[ "Logo设计", "角色设计", "表情包设计", "品牌视觉", "插画创作", "Adobe Illustrator", "Procreate", "Photoshop"].map(skill => (
              <span key={skill} className="px-5 py-2.5 bg-background text-foreground rounded-full text-sm border border-border shadow-md font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-accent/20 blur-[60px] -z-10"></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

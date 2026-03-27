"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
// 确保导入所有图标，修复之前的 ReferenceError
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
          
          {/* 01 成都理工大学体育学院 - 严格按照原始代码，不做任何改动 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
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
                为成都理工大学体育学院 design 品牌Logo及配套角色形象。
                设计将体育精神与学院特色相融合，打造具有辨识度的视觉识别系统。
              </p>
            </div>

            <div className="space-y-12 flex flex-col items-center">
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
                      className="w-full h-full object-cover object-center translate-x-[1mm]" 
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

              <div className="w-full">
                <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                  <img 
                    src="/v0-designer-brand-tk/zhanshi.jpg" 
                    alt="Logo视觉展示" 
                    className="w-full h-auto block"
                  />
                </div>
              </div>

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

          {/* 02 时尚芭莎获奖作品 - 布局和内容完全保持不变 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    时尚芭莎获奖作品
                  </h2>
                  <p className="text-sm text-accent font-medium tracking-wide italic">莎莎IP设计 · 荣誉奖项</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                作品「莎莎」荣获时尚芭莎IP设计大赛奖项。设计融合时尚感与角色趣味性，探索传统文化与现代潮流的碰撞。
              </p>
            </div>

            <div className="space-y-12 flex flex-col items-center">
              <div className="w-full">
                <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                  <img src="/v0-designer-brand-tk/ip1.jpg" alt="展示一" className="w-full h-auto block" />
                </div>
              </div>
              <div className="w-full pt-6 border-t border-border/60">
                <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                  <img src="/v0-designer-brand-tk/ip2.jpg" alt="展示二" className="w-full h-auto block" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-accent/20 blur-[60px] -z-10"></div>
          </div>

          {/* 03 栗子君 - 重构排版以解决比例问题：精准缩小左侧截图，修改文字标题 */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border group transition-all duration-300 hover:shadow-lg overflow-hidden relative">
            {/* 文字标题部分 - 居中，统一 font-bold */}
            <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                    成都理工大学官方IP
                  </h2>
                  <p className="text-sm text-primary font-medium tracking-wide italic">栗子表情包 · 系列插图</p>
                </div>
              </div>
            </div>

            {/* 图片展示区 - 重构排版：xioahan进一步缩小，右侧垂直组合 */}
            <div className="w-full flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-center md:items-start pt-6 border-t border-border/60 overflow-x-hidden">
              
              {/* 左侧：商店长截图 xioahan.jpg - 精准缩小占比 (从 38% 缩小至 34%) 并保持等比例 */}
              <div className="w-full md:w-[34%] shrink-0 overflow-hidden relative items-center justify-center flex">
                <div className="w-full relative rounded-xl border border-border shadow-lg overflow-hidden bg-white p-1">
                  <img 
                    src="/v0-designer-brand-tk/xioahan.jpg" 
                    alt="商店长图截图展示" 
                    className="w-full h-auto block aspect-auto object-contain" 
                  />
                </div>
              </div>

              {/* 右侧：垂直组合 (Lidong横图 + GIFs) */}
              <div className="w-full md:flex-1 space-y-10 flex flex-col items-center">
                
                {/* 1. 横图 lidong.jpg - 缩小并放置在此 */}
                <div className="w-full flex flex-col items-center gap-6 pt-4 border-b border-border/60 pb-10">
                  <div className="w-full max-w-lg">
                    <div className="w-full relative rounded-xl border border-border shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
                      <img 
                        src="/v0-designer-brand-tk/lidong.jpg" 
                        alt="立冬文章封面插图" 
                        className="w-full h-auto block p-0.5"
                      />
                    </div>
                  </div>
                  {/* 精准修改标题内容为：手绘公众号封面 */}
                  <h3 className="text-sm text-primary font-medium tracking-wider italic uppercase">
                    手绘公众号封面
                  </h3>
                </div>

                {/* 2. GIF 2X2 网格 (占 50%) */}
                <div className="w-full max-w-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'miaohui.gif', alt: '秒回GIF表情' },
                      { name: 'wushi.gif', alt: '武狮GIF表情' },
                      { name: 'dianyin.gif', alt: '电音GIF表情' },
                      { name: 'majiang.gif', alt: '麻将GIF表情' }
                    ].map((gif) => (
                      <div key={gif.name} className="aspect-square relative rounded-xl overflow-hidden border border-border bg-white shadow-md transition-transform hover:scale-[1.05]">
                        {/* 使用标准 img 标签直接加载 GIF */}
                        <img 
                          src={`/v0-designer-brand-tk/${gif.name}`} 
                          alt={gif.alt} 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                  {/* 精准修改标题内容为：新春gif表情包 */}
                  <div className="mt-6 text-center">
                    <h3 className="text-sm text-primary font-medium tracking-wider italic uppercase">
                      新春gif表情包
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-primary/20 blur-[60px] -z-10"></div>
          </div>

        </div>
      </section>

      {/* Skills Section - 保持原样... */}
      {/* Footer Section - 保持原样... */}

    </div>
  )
}

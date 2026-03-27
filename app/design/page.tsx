"use client";

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Monitor, Image as ImageIcon, Camera, Brush, Play } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

export default function DesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-6">
            视觉设计
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            海报设计 · 摄影作品 · 绘画原画 · 动画创作
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* 官网门户大图 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  成都理工大学官网门户
                </h2>
                <p className="text-sm text-muted-foreground">大图制作</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              负责成都理工大学官方网站首页轮播大图的设计制作，
              结合校园文化与时事热点，呈现学校的多元风采。
            </p>
            {/* 如果有官网大图文件，可按下方摄影作品格式替换 */}
            <ImagePlaceholder
              icon={Monitor}
              text="官网门户大图作品"
              aspectRatio="aspect-[21/9]"
            />
          </div>

          {/* 海报获奖作品 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <ImageIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  海报获奖作品
                </h2>
                <p className="text-sm text-muted-foreground">创意海报设计</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              在各类设计比赛中获奖的海报作品，涵盖公益、文化、商业等多种主题，
              展现创意思维与视觉表达能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImagePlaceholder icon={ImageIcon} text="海报作品 1" aspectRatio="aspect-[3/4]" />
              <ImagePlaceholder icon={ImageIcon} text="海报作品 2" aspectRatio="aspect-[3/4]" />
              <ImagePlaceholder icon={ImageIcon} text="海报作品 3" aspectRatio="aspect-[3/4]" />
            </div>
          </div>

          {/* 创意节气摄影 - 已替换为你的图片 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  创意节气摄影
                </h2>
                <p className="text-sm text-muted-foreground">二十四节气系列</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              以中国传统二十四节气为主题的创意摄影作品，
              将自然之美与传统文化相结合，用镜头记录季节变换的诗意。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* 雨水 */}
              <div className="overflow-hidden rounded-lg border border-border aspect-square">
                <img src="/yu.jpg" alt="雨水" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              {/* 寒露 */}
              <div className="overflow-hidden rounded-lg border border-border aspect-square">
                <img src="/hanlu.jpg" alt="寒露" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              {/* 立秋 */}
              <div className="overflow-hidden rounded-lg border border-border aspect-square">
                <img src="/liqiu.jpg" alt="立秋" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              {/* 大雪/冬 */}
              <div className="overflow-hidden rounded-lg border border-border aspect-square">
                <img src="/dong.jpg" alt="冬" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </div>
          </div>

          {/* 绘画作品 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Brush className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  绘画作品
                </h2>
                <p className="text-sm text-muted-foreground">游戏原画</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              游戏角色原画设计与插画创作，涵盖角色设计、场景概念、道具设计等，
              展现数字绘画技巧与创意构思能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImagePlaceholder icon={Brush} text="游戏原画作品" aspectRatio="aspect-[4/3]" />
              <ImagePlaceholder icon={Brush} text="插画创作" aspectRatio="aspect-[4/3]" />
            </div>
          </div>

          {/* 动画作品 */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-light text-foreground mb-2">
                  动画作品尝试
                </h2>
                <p className="text-sm text-muted-foreground">科普动画</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              将复杂的过程以简洁易懂的动画形式呈现，探索动画在内容创作领域的应用可能。
            </p>
            <ImagePlaceholder icon={Play} text="动画作品" aspectRatio="aspect-video" />
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-foreground mb-8">设计技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Photoshop", "Illustrator", "After Effects", "Procreate", "摄影", "数字绘画", "动画制作"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border">
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

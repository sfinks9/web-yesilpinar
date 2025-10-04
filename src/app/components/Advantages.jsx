"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import {
  ShowerHead,
  LandPlot,
  CircleParking,
  Coffee,
  ShieldCheck,
  Clapperboard,
} from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      icon: (
        <LandPlot className="w-12 h-12 border-b-2 border-green-600 p-2 rounded-full mb-1" />
      ),
      title: "Yeni Çim",
      description:
        "Profesyonel kalite yeni çim sayesinde top kontrolü ve oyun keyfi üst seviyede. Sahanın her noktasında aynı performansı alabilir, kayma veya bozulma olmadan futbolun tadını çıkarabilirsiniz. Oyuncular için sakatlanma riskini azaltan yapısı sayesinde güvenli bir oyun deneyimi sunar. Her maçta kendinizi profesyonel bir stadyum atmosferinde hissedeceksiniz.",
      image: "/soccer-field.jpg",
    },
    {
      id: 2,
      icon: (
        <ShowerHead className="w-12 h-12 border-b-2 border-green-600 p-2 rounded-full mb-1" />
      ),
      title: "Özel Odalar",
      description:
        "Takımınıza özel hazırlanmış temiz odalarda maç öncesi ve sonrası konforlu bir alan bulabilirsiniz. Her odada özel tuvalet, duş ve kişisel eşyalarınızı güvenle bırakabileceğiniz dolaplar mevcuttur. Rahat atmosfer sayesinde takım ruhunu güçlendiren bir hazırlık süreci geçirirsiniz. Maç sonrası dinlenmek ve toparlanmak için de ideal bir ortam sağlar.",
      image: "/soccer-locker-room.jpg",
    },
    {
      id: 3,
      icon: (
        <Clapperboard className="w-12 h-12 border-b-2 border-green-600 p-2 rounded-full mb-1" />
      ),
      title: "Maç Kaydı",
      description:
        "Oynadığınız maçlar profesyonel kamera sistemiyle HD kalitede kaydedilir. Böylece performansınızı analiz edebilir ve gelişiminizi takip edebilirsiniz. Ayrıca en güzel gollerinizi sosyal medyada paylaşarak anılarınızı ölümsüzleştirebilirsiniz. Hem arkadaşlarınızla eğlenmek hem de kendinizi geliştirmek için eşsiz bir fırsat sunar.",
      image: "/soccer-filming.jpg",
    },
    {
      id: 4,
      icon: (
        <ShieldCheck className="w-12 h-12 border-b-2 border-green-600 p-2 rounded-full mb-1" />
      ),
      title: "Güvenlik",
      description:
        "Tesisimiz 7/24 güvenlik kameraları ile izlenmektedir ve her alan sürekli denetim altındadır. Eşyalarınızı gönül rahatlığıyla soyunma odalarında bırakabilirsiniz. Ayrıca sahada herhangi bir olumsuz durumda anında müdahale eden güvenlik ekibi mevcuttur. Siz sadece oyuna odaklanırken biz güvenliğinizi garanti altına alıyoruz.",
      image: "/soccer-security-cam.jpg",
    },
    {
      id: 5,
      icon: (
        <Coffee className="w-12 h-12 border-b-2 border-green-600 p-2 rounded-full mb-1" />
      ),
      title: "Kafeterya",
      description:
        "Maç öncesi enerjinizi toplayabileceğiniz ya da maç sonrası keyifli vakit geçirebileceğiniz modern bir kafeteryamız bulunmaktadır. Sıcak ve soğuk içeceklerin yanı sıra atıştırmalıklarla arkadaşlarınızla hoş sohbet edebilirsiniz. Aileleriniz ve dostlarınız maç izlerken rahatça vakit geçirebilir. Sporun yanında sosyalleşme imkanı da sunuyoruz.",
      image: "/soccer-cafeteria.jpg",
    },
    {
      id: 6,
      icon: (
        <CircleParking className="w-12 h-12 border-b-2 border-green-600 p-2 rounded-full mb-1" />
      ),
      title: "Otopark",
      description:
        "Araba ile gelen misafirlerimiz için geniş ve ücretsiz otopark alanı sunuyoruz. Böylece aracınızı güvenle bırakıp yalnızca maça odaklanabilirsiniz. Otopark, sahaya yakın konumuyla ulaşım kolaylığı sağlar. Yoğun günlerde bile park yeri sıkıntısı yaşamadan tesisimizi ziyaret edebilirsiniz.",
      image: "/soccer-parking.jpg",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".advantage-card").forEach((card, i) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: i * 0.2, // stagger efekti
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section id="advantages" className="container text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advantages.map((advantage) => (
          <Card advantage={advantage} key={advantage.id} />
        ))}
      </div>
    </section>
  );
}

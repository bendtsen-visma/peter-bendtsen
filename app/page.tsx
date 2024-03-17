'use client'
import * as React from "react"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CircleArrowRight } from 'lucide-react';
import { Linkedin } from 'lucide-react';


function openLink(link: string) {
  window.open(link);
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="bg-cover bg-center w-full h-full absolute top-0 left-0"
        style={{ backgroundImage: `url('/bg-purple3.png')`, backgroundAttachment: 'fixed', position: 'fixed', zIndex: -1 }}>
    </div>

      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Peter Bendtsen</h1> */}
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pr-20">Peter</h1>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pl-20">Bendtsen</h1>

      <h2 className=" text-base text-gray-500 m-20 text-xl">Projects</h2>

      <div className="flex flex-col">

        <div className="flex flex-row w-full">
        <Card className="w-80 m-5 shadow-lg transition-transform transform hover:scale-105 duration-300">
              <figure>
                <img className="rounded-t-lg" src="aurora.PNG" alt="Shoes" />
              </figure>
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle>Bageriet Aurora</CardTitle>
                <CircleArrowRight className="hover:text-blue-700 hover:cursor-pointer" onClick={() => openLink("https://bagerietaurora.dk")}></CircleArrowRight>
              </div>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Badge className="mr-1">Next.js</Badge>
              <Badge className="mr-1">Firebase</Badge>
              <Badge>DaisyUI</Badge>
            </CardFooter>
          </Card>
          
          <Card className="w-80 m-5 shadow-lg transition-transform transform hover:scale-105 duration-300">
              <figure>
                <img className="rounded-t-lg" src="runroute.PNG" alt="Shoes" />
              </figure>
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle>RunRoute</CardTitle>
                <CircleArrowRight className="hover:text-purple-700 hover:cursor-pointer" onClick={() => openLink("localhost:3000")}></CircleArrowRight>
              </div>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Badge className="mr-1">React</Badge>
              <Badge>Google Maps</Badge>
            </CardFooter>
          </Card>

        </div>
        
        <div className="flex flex-row w-full">
          <Card className="w-80 m-5 shadow-lg transition-transform transform hover:scale-105 duration-300">
              <figure>
                <img className=" rounded-t-lg" src="aioli2.PNG" alt="Shoes" />
              </figure>
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle>Aioli</CardTitle>
                <CircleArrowRight className=" hover:text-green-300 hover:cursor-pointer" onClick={() => openLink("localhost:3000")}></CircleArrowRight>
              </div>
              <CardDescription>Recipe generator</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Badge className="mr-1">Angular</Badge>
              <Badge>OpenAI</Badge>
            </CardFooter>
          </Card>
          
          <Card className="w-80 m-5 shadow-lg transition-transform transform hover:scale-105 duration-300">
              <figure>
                <img className="rounded-t-lg" src="tableplanner.PNG" alt="Shoes" />
              </figure>
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardTitle>Table Planner</CardTitle>
                <CircleArrowRight className=" hover:text-pink-400 hover:cursor-pointer" onClick={() => openLink("https://table-planner.vercel.app/")}></CircleArrowRight>
              </div>

              
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Badge>Angular</Badge>
            </CardFooter>
          </Card>

        </div>
      </div>

      <div className="bg-cover bg-center w-full h-full absolute bottom-0 left-0"
          style={{ backgroundImage: `url('/facade3.png')`, backgroundAttachment: 'fixed', position: 'fixed', zIndex: -1 }}>
        <Image src="/blur1.png" alt="Logo" width={300} height={200} /> 
      </div>


      <div className="mt-20 mb-10">
        <p className="text-gray-500">+45 42 20 24 50</p>
        <p className="text-gray-500">peter_b@live.dk</p>
      </div>

      <Linkedin onClick={() => openLink("https://dk.linkedin.com/in/peter-bendtsen-1451b2142")} className="text-gray-500 mt-10 hover:cursor-pointer" />

    </main>
  );
}

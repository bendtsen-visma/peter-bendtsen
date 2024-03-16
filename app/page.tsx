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

function openLink(link: string) {
  window.open(link);
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Peter Bendtsen</h1>

      <h2 className=" text-base m-20">Projects</h2>

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
                <img className=" rounded-t-lg" src="aurora.PNG" alt="Shoes" />
              </figure>
            <CardHeader>
              <CardTitle>Recipe Generator</CardTitle>
              <CardDescription>Card Description</CardDescription>
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
                <img className=" rounded-t-lg" src="aurora.PNG" alt="Shoes" />
              </figure>
            <CardHeader>
              <CardTitle>Table Planner</CardTitle>
              
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

    </main>
  );
}

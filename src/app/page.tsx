/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/07/01 06:23:42 by jmykkane          #+#    #+#             */
/*   Updated: 2024/07/01 08:20:45 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import VideoBackground from "./components/Background";
import TopNav from "./components/Navbar";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
      <VideoBackground />
      <TopNav />
      <Logo />
      
    </main>
  );
}

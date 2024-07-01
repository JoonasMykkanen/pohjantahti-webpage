/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Logo.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/07/01 07:00:06 by jmykkane          #+#    #+#             */
/*   Updated: 2024/07/01 08:30:10 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Image from "next/image";
import React from 'react';

export default function Logo() {

  return (
    <div className="relative top-24 flex justify-center">
      <Image 
        src="/logo.svg"
        alt="Pohjantähti logo"
        width={1200}
        height={1200}
        priority
      />    
    </div>
  );
}
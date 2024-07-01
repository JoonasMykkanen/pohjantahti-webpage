/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   providers.tsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/07/01 07:47:25 by jmykkane          #+#    #+#             */
/*   Updated: 2024/07/01 07:52:22 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}
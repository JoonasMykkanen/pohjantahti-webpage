/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Background.tsx                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/07/01 06:23:21 by jmykkane          #+#    #+#             */
/*   Updated: 2024/07/01 07:59:00 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export default function VideoBackground() {
  return (
    <video className="bg-video" autoPlay muted loop>
        <source src="/media/aurora.mov" />
        Your browser does not support videos... they are essential for this page to work.
    </video>
  );
}
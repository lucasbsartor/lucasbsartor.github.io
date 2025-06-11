---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/29283682?s=400&u=a4a626a8911acc1639038316a3cc892ef6e1b0aa&v=4',
    name: 'Lucas de Bona Sartor',
    title: 'SSE - Senior Silly Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/lucasbsartor' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/lucasbsartor/' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/29283682?s=400&u=a4a626a8911acc1639038316a3cc892ef6e1b0aa&v=4',
    name: '"Himself"',
    title: 'Lucas de Bona Sartor',
    links: [
      { icon: 'github', link: 'https://github.com/lucasbsartor' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/lucasbsartor/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      About
    </template>
    <template #lead>
        The development of this thing is guided by an international team, some of whom have chosen to be featured below like "Lucas" and "himself".
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>

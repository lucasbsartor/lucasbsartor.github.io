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
    name: '"Ele Mesmo"',
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
      Sobre
    </template>
    <template #lead>
        O desenvolvimento dessa bagaça é guiado por uma equipe internacional, alguns dos quais escolheram ser apresentados abaixo como o "Lucas" e "Ele Mesmo".
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>

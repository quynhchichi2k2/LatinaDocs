<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/dickymuliafiqri.png',
    name: 'Dicky Mulia Fiqri',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/dickymuliafiqri' }
    ]
  },
]
</script>

# Our Team

\*sfx boots  
Katakan halo, katakan halo.

<VPTeamMembers size="small" :members="members" />

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Mechmania Learn',
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/Mech-Mania/learn' }
          ],
          customCss: [
              './src/styles/global.css',
          ],
            components: {
            PageTitle: './src/components/pageTitle.astro',
          },
          sidebar: [
              {
                  label: 'Getting Started',
                  items: [{autogenerate: {directory: "getting-started"}}]
              },
              {
                  label: 'Lessons',
                  items: [
                      {
                          label: "Design", 
                          items: [{autogenerate: {directory: "lessons/design"}}],
                      },
                      {
                          label: "Electrical",
                          items: [{autogenerate: {directory: "lessons/electrical"}}],
                      },
                      {
                          label: "Programming",
                          items: [{autogenerate: {directory: "lessons/programming"}}],
                      },
                  ]
              },
              {
                  label: 'Guides',
                  items:[{autogenerate: {directory: "guides"}}]
              },


          ],
      }),
	],

});

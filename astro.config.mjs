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
          sidebar: [
              {
                  label: 'Getting Started',
                  autogenerate: {directory: "getting-started"}
              },
              {
                  label: 'Lessons',
                  items: [
                      {
                          label: "U1 design",
                          autogenerate: {directory: "lessons/u1-design"},
                      },
                      {
                          label: "U2 electrical",
                          autogenerate: {directory: "lessons/u2-electrical"},
                      },
                      {
                          label: "U3 programming",
                          autogenerate: {directory: "lessons/u3-programming"},
                      },
                  ]
              },
              {
                  label: 'Guides',
                  autogenerate: {directory: "guides"}
              },


          ],
      }),
	],

});

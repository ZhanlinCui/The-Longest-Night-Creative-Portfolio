/**
 * Media overrides: add files under `web/public/media/` and set paths here.
 * Use site-root paths like `/media/landingpage.png`.
 * Leave empty string to keep the built-in placeholder (Stitch export image).
 */
const placeholders = {
  landingHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBtgcR6B58fQe7DQodLoQLR1Nm7HzhqEYpgSKUYb95zeLFfXGA_-_qfI8kgDodBSMzizfsZePplEfDbcMQs9RT6eeuvGT36f708ZwU2y5oXvLrHvedX7CmJUaqe47V_4yFrwAoIlIXh3k3vsRy1aH5CHs3uv3URwWLbqmoQbLx6Yo0Y2A5LFTDjdNYbOGgi0QmUQ1qoXzH_Vsci926-38PJee_ZEzGZxt9gWlr-lnuSK-eRoUrnguOWwlGiVwmMlqpmUEzyTsRGZN0',
  reflectionBg:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA4HYof4rMatDJXOkI_DgZ-oKk1IrraZO7SaghFUc08R9QpwpPQhzvcQSA3f2rCBpu72jiHxq7AJzHnUJ9LtrO5sMH-AlVxyrrL8luSE84P2BMSX5bOmoGD_Oo-rQW_Fbkb-dx787ODSX_E9z7Ht88hYjzSQoykfjf6z_btw9MQfqZ2ovro8xCdoe_JnfntDpYx0GpGGOvsgW6h8nKw2LjgYFA0yyFucR27my0xXQWx0L8JzPERWUKb2MYqEocrRrcQz3C-4LvsTJs',
  scene01Hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBs2Kq4rRBU8WivcTCiNUC8gdoujv1jDUtEbRS-XDCqEbe38qnN0HIOAWPeXbLJ5nKW9hMJrf1XZ7ymqAOMjlK5aY4FWyigg8F9zXaQKopwDksnWy34mpy1vGPV2QET8P2pnoRONS1HLI_1hE1sY9AV1ks7E1WtCnWzvNShP5wMZpwBySjUOBN-Ficbt0Joshg2PDHDk6jaLmY9XDPe4zIgnjxTuzKUexSM5o-rnvxavZa_kjSP6CImD_p2xHe2E6yrAY72ACDkvEM',
  scene02Hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDglW4wGY03nm3V2vQnDCX8CgM8ZgLB5auMjshB3sZHzFDEJn9TxQOQrKvx5S7FOGm539zqfVLuEguCeMDLn2j4R7gwR4UlB8VSR1-Ur3PaeXEr--JIyKnED0su2WpHP5jLsdoCaimyYJIL7a8YzxdOczxLoxFTjD-H_PEhHsDmpLWgtA5nSBbVnEDJZdvhFVtSMRgstXlQbBscqaeA0QcRJ9p_4XewTUyxfZC4i69GfGKRhVerVKMGs7VYiTKZlflao4XtH1Z8xJs',
  scene03Hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAxGPCt6UGecBzbsiJrKPZoNzhbHBeCERlYejolzUTUkbM6148zLQXnT229_34-ErDxvVe664sMQg3c4w3tdE82PDxfi282qkbJ1g6OJp-aQXk-BtqCk38SWS3fdHT9uj47Qqd1gGLJ063rjpWd7ztzJlnR0j2tzIxV_rfMomrjCND2rVhSrIa549AXum_gcDJK4ks-Rjf4-Srq_yItEtg7G9M_2-VzkETEGbjcvhSs7l2netVqsPJF1FZ_O2j7ZP8iXhED1fdGPTk',
  scene04Hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCOAqRglBUGqszfnjoOv1CUwRNkhAy73NYR2h5x7cvQ0n4rMZIvrCEAxH2kWS5ATq8G3WZ-LA-a1LimVyXrCuC39ExxTINYvwuwiAJJ4i2uGWYTV19QYu7xJ7hKnA4L5V_Rnq3bD3wjCMRD1bYKRR4WnXD5L70Gv8IdrnNBW_pDM82WDjrrZWBx0-VCSfhhhqR-wVKfPfT5Urc4tBBAYK1hnGi2dpd90NZ7KD-lMyUH2t04iqkEb5Rie94SE0jVigaRTR8OgEjoeY8',
  scene05Hero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBHka34cRTRl_J0ApcYI-F-q-H1gVquugRNzg2l-FFStDdaV6RTCohYd6_aY_qc3O2wVYU4Jo81QcklcLRerCzWjtamXU3hgTCteVNJJ69ik5S5ngJ9YPOpQsTDu0ePLlDu18GDF3cH664Dis1QjKtsiOXH9Sdqq47RH3uPS8lORotA_N5PiHspwcqZo7dIimQxBfIoZWlZBQMYUKAPnIZe5Hk0QW5aOFscM8giRFZSrvjzDR3qGV49yKiXfB-lL744ZnKbT6WyngM',
} as const

export type MediaKey = keyof typeof placeholders

export const mediaOverrides: Record<MediaKey, string> = {
  landingHero: '/media/landingpage.png',
  reflectionBg: '',
  scene01Hero: '',
  scene02Hero: '',
  scene03Hero: '',
  scene04Hero: '',
  scene05Hero: '',
}

export function mediaUrl(key: MediaKey): string {
  const o = mediaOverrides[key]
  if (o.length > 0) return o
  return placeholders[key]
}

/** True if the resolved URL should be treated as video (by extension). */
export function isVideoPath(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url)
}

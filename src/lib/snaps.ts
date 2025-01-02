import meta from '~meta'

export type SnapHome = {
  type: 'home'
  id: string
  title: string
  name: string
  hanzi: string
}

export type SnapExperience = (typeof meta.experience)[number] & {
  type: 'experience'
  id: string
}

export type SnapEducation = (typeof meta.education)[number] & {
  type: 'education'
  id: string
}

export type Snap = SnapHome | SnapExperience | SnapEducation

export const SNAPS: Snap[] = [
  { type: 'home', id: 'home', title: meta.title, name: meta.name, hanzi: meta.hanzi },
  ...meta.experience.map<SnapExperience>((e) => ({
    type: 'experience',
    id: e.title,
    ...e,
  })),
  ...meta.education.map<SnapEducation>((e) => ({
    type: 'education',
    id: e.cert,
    ...e,
  })),
]

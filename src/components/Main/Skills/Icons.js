import React from "react";
import { Icon } from "@iconify/react";

function SkillIcons() {
  return (
    <>
      <div className="flex flex-col gap-4">
      <h1 className="font-bold">Cloud Providers</h1>

        <ul className="flex gap-2 flex-wrap">
          <Icon icon="fa-brands:aws" />
          AWS,
          <Icon icon="simple-icons:digitalocean" />
          DigitalOcean
          <Icon icon="codicon:azure" />
          Azure,
        </ul>
        <h1 className="font-bold">OS</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="cib:windows" />
          Windows,
          <Icon icon="cib:arch-linux" />
          Arch,
          <Icon icon="cib:ubuntu" />
          Ubuntu,
          <Icon icon="cib:debian" />
          Debian,
          <Icon icon="cib:centos" />
          CentOS,
          <Icon icon="cib:redhat" />
          RHEL
          <Icon icon="cib:gentoo" />
          Gentoo,
          <Icon icon="cib:apple" />
          OSX,
        </ul>
        <h1 className="font-bold">Configuration Managment</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="cib:ansible" />
          Ansible,
          <Icon icon="cib:saltstack" />
          SaltStack
        </ul>
        <h1 className="font-bold">Version Control</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="cib:gitlab" />
          GitLab,
          <Icon icon="akar-icons:github-fill" />
          GitHub,
          <Icon icon="fa:bitbucket" />
          Bitbucket
        </ul>
        <h1 className="font-bold">Task Management</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="akar-icons:github-fill" />
          GitHub Projects,
          <Icon icon="mdi:jira" />
          Jira,
          <Icon icon="ci:trello" />
          Trello
        </ul>
        <h1 className="font-bold">Monitoring</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="simple-icons:prometheus" />
          Prometheus,
          <Icon icon="cib:grafana" />
          Grafana,
          <Icon icon="simple-icons:pm2" />
          PM2,
        </ul>
        <h1 className="font-bold">Documentation</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="cib:confluence" />
          Confluence,
          <Icon icon="cib:gitlab" />
          GitLab
          <Icon icon="cib:github" />
          GitHub
          <Icon icon="cib:notion" />
          Notion
        </ul>
        <h1 className="font-bold">Virtuaulsation</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="cib:proxmox" />
          Proxmox,
          <Icon icon="carbon:logo-vmware" />
          VMware
          <Icon icon="simple-icons:qemu" />
          QMEU
        </ul>
        <h1 className="font-bold">Programming</h1>
        <ul className="flex gap-2 flex-wrap">
          <Icon icon="mdi:react" />
          React,
          <Icon icon="teenyicons:nextjs-solid" />
          Next.js,
          <Icon icon="la:node" />
          Node,
          <Icon icon="mdi:language-javascript" />
          Javascript,
          <Icon icon="bx:bxl-python" />
          Python,
          <Icon icon="cib:go" />
          Go
          <Icon icon="mdi:bash" />
          Bash,
          <Icon icon="cib:php" />
          PHP
        </ul>
      </div>
    </>
  );
}

export default SkillIcons;

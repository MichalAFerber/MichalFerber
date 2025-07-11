---
layout: page
title: About
permalink: /about/
weight: 1
---

<link rel="stylesheet" href="/assets/css/custom.css">

# **My story**

Hi, I am **{{ site.author.name }}** :wave:,

As a homeschooled kid in small-town South Carolina, I was extremely interested in computers. Once I realized I had an affinity for technology, I never looked back. After graduating a couple of years early from high school, I began my career on graduation day with an internship at a local system integrator shop. I went on to delve into programming, network infrastructure, telephony, and more.

Over my career in IT spanning more than 30+ years, I’ve collected many IT certifications [Microsoft, Google, Citrix, Ascom, Genesys, Milestone VMS, C-Cure 9000, etc.], and I even earned my Microsoft MCSE NT 4.0 in the early years. Here recently, I’m currently investing lots of time in Google workspace and Google cloud.

{% capture list_items %}
Skills
Badges
Certifications
Timeline
{% endcapture %}
{% include elements/list.html title="" type="toc" %}

<h2 id="skills">[Skills]</h2>
***
<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<h2 id="badges">[Badges]</h2>
***
<div class="badges-container">
{% capture carousel_images %}
/assets/badges/microsoft-azure-fundamentals.png
/assets/badges/microsoft-365-teams-administrator-associate.png
/assets/badges/mcse-square.png
/assets/badges/csc-champion-badge.jpg
/assets/badges/sip-ssca-elite.png
/assets/badges/milestone-certified-integration-technician-mcit.png
/assets/badges/mosyle.png
{% endcapture %}
{% include elements/carousel.html %}
</div>

<h2 id="certifications">[Certifications]</h2>
***
<div class="certifications-container">
{% capture carousel_images %}
/assets/certs/Microsoft_Certified_Professional_Certificate_1-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_4-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_0-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_2-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_3-pdf.jpg
/assets/certs/2003-10-16_Microsoft_SQL_Server_2000.jpg
/assets/certs/2002-05-24_Citrix_Certificate_NFuse_Administrator.jpg
/assets/certs/2002-09-20_ININ_IC2x_Certificate_System_Administration.jpg
/assets/certs/2002-09-27_ININ_IC2x_Certificate_System_Handler_Development.jpg
/assets/certs/2008-12-10_DCC_Certification_Communicator-NXT-System-Administrator.jpg
/assets/certs/2009-03-20_Ascom_FreeNET_Advanced.png
/assets/certs/2009-03-20_Ascom_FreeNET_Basic.png
/assets/certs/2009-03-26_Ascom_FreeNET_Avaya.jpg
/assets/certs/2009-03-26_Ascom_FreeNET_Cisco.png
/assets/certs/2009-03-26_Ascom_FreeNET_ShoreTel.png
/assets/certs/2009-05-08_Ascom_UNITE.png
/assets/certs/2009-05-31_Ascom_Certified_Systems_Integrator.jpg
/assets/certs/2013-10-29_Software_House_C-CURE_9000.png
/assets/certs/2015-06-25_Milestone-Advanced-Certification.jpg
/assets/certs/2019-01-10_Milestone-Certified-Integration-Technician-MCIT.jpg
/assets/certs/2021-09-26_Mosyle_certificate_628-A4F.jpg
/assets/certs/2022-01-02_SIP_SSCA_Certification.jpg
/assets/certs/2022-03-20_Chrome_Enterprise_Deployment_Exam.jpg
/assets/certs/2022-04-14_Druva_Endpoints.jpg
/assets/certs/mailerlite-expert.png
{% endcapture %}
{% include elements/carousel.html %}
</div>

<h2 id="timeline">[Timeline]</h2>
***
<div class="row">
{% include about/timeline.html %}
</div>

<script src="/assets/js/carousel.js"></script>

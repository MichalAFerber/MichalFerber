---
layout: page
title: About
permalink: /about/
weight: 1
---

# **My story**

Hi I am **{{ site.author.name }}** :wave:,

As a homeschooled kid in small-town South Carolina, I was extremely interested in computers. Once I realized I had an affinity for technology, I never looked back. After graduating a couple of years early from high school, I began my career on graduation day with an internship at a local system integrator shop. I went on to delve into programming, network infrastructure, telephony, and more.

Over my career in IT spanning more than 30+ years, I’ve collected many IT certifications [Microsoft, Google, Citrix, Ascom, Genesys, Milestone VMS, C-Cure 9000, etc.], and I even earned my Microsoft MCSE NT 4.0 in the early years. Here recently, I’m currently investing lots of time in Google workspace and Google cloud.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>

{% capture carousel_images %}
/assets/certs/Microsoft_Certified_Professional_Certificate_1-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_4-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_0-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_2-pdf.jpg
/assets/certs/Microsoft_Certified_Professional_Certificate_3-pdf.jpg
{% endcapture %}
{% include elements/carousel.html %}

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + totalImages) % totalImages; // Atualiza o índice da imagem
  updateCarousel(); // Atualiza a visualização do carrossel
}

function openModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullImage");
  const img = document.querySelector(".about-image");

  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}


// Função para atualizar o carrossel
function updateCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  const offset = -currentIndex * 100; // Calcula o deslocamento
  carouselImages.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Troca de imagens automaticamente
setInterval(() => {
  changeSlide(1); // Chama a função para mudar para a próxima imagem
}, 3000); // Troca a imagem a cada 3 segundos

// Função para selecionar o serviço e rolar até o formulário
function selecionarServico(servico) {
  document.getElementById("service").value = servico;
  document.getElementById("service-form").scrollIntoView({ behavior: "smooth" });
}



// Função para enviar a mensagem para o WhatsApp
function enviarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("name").value;
  const telefone = document.getElementById("phone").value;
  const servico = document.getElementById("service").value;
  const numeroWhatsApp = "5584994510525";

  const mensagem = `Olá, meu nome é ${nome}. Gostaria de solicitar o serviço: ${servico}. Meu número de contato é ${telefone}.`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Função para rolagem suave ao clicar em links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Função para adicionar a classe 'visible' aos elementos quando aparecem na tela
function handleScrollAnimation() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  fadeInElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Checa se o elemento está na tela para adicionar a classe 'visible'
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', handleScrollAnimation);

// Chama a função ao carregar a página para ativar os elementos que já estão visíveis
handleScrollAnimation();

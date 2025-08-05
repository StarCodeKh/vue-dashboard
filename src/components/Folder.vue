<template>
    <footer class="footer">
        <div class="footer-content">
            <p>
                © {{ currentYear }}
                <a href="https://souysoeng.com" target="_blank" rel="noopener" class="footer-link">
                    StarCodeKh
                </a>. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script setup>
    const currentYear = new Date().getFullYear()
</script>

<style scoped>
    .footer {
        padding: 1rem 1.5rem;
        background-color: #f1f5f9;
        color: #64748b;
        text-align: center;
        font-size: 0.875rem;
        border-top: 1px solid #e5e7eb;
        box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.03);
    }

    .footer-link {
        text-decoration: none;
        color: #3b82f6;
        font-weight: 500;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
